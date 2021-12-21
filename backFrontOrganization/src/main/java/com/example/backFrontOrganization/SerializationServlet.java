package com.example.backFrontOrganization;

import java.io.*;
import java.util.Arrays;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "SerializationServlet", value = "/SerializationServlet")
public class SerializationServlet extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try {
            String s = getBody(request);
            BufferedWriter writer = new BufferedWriter(new FileWriter("/home/roman/IdeaProjects/backFrontOrganization/src/main/webapp/collisionElements.html"));
            writer.write(s);
            writer.close();
        } catch (IOException ioException) {
            ioException.printStackTrace();
        }
    }


    public static String getBody(HttpServletRequest request) throws IOException {
        String body = null;
        StringBuilder stringBuilder = new StringBuilder();
        BufferedReader bufferedReader = null;

        try {
            InputStream inputStream = request.getInputStream();
            if (inputStream != null) {
                bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
                char[] charBuffer = new char[128];
                int bytesRead = -1;
                while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
                    stringBuilder.append(charBuffer, 0, bytesRead);
                }
            } else {
                stringBuilder.append("");
            }
        } catch (IOException ex) {
            throw ex;
        } finally {
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (IOException ex) {
                    throw ex;
                }
            }
        }

        body = stringBuilder.toString();
        return body;
    }

    public void destroy() {
    }
}