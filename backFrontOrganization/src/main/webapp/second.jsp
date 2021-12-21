<%@ page import="java.io.BufferedReader" %>
<%@ page import="java.io.FileReader" %><%--
  Created by IntelliJ IDEA.
  User: roman
  Date: 21.12.21
  Time: 14:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="fi_converted.css">
    <title>From server</title>
</head>
<body>

<div class="wrapper">
    <div class="b1 flex_left"><p>Шестиразовий чемпіон світу з кікбоксингу (двічі серед аматорів і чотири рази серед професіоналів). Чемпіон світу з боксу у важкій ваговій категорії за версіями WBO (1999—2000 роки), WBC (2004—2005 роки та 2008—2014 роки), The Ring (2004—2005 роки). Протягом кар'єри переміг 15 бійців за титул чемпіона світу у важкій вазі, з них 2 — за тзв. «легітимний» чемпіонський титул. Срібний призер чемпіонату світу з боксу серед аматорів за версією AIBA (1995 рік). Єдиний боксер, якому вручили пояс «Вічного» чемпіона світу у важкій вазі за версією WBC. Триразовий чемпіон України з боксу серед аматорів. Чемпіон I Всесвітніх ігор військовослужбовців у важкій ваговій категорії (1995 рік). 11 червня 2018 року першим з громадян України включений до Міжнародної зали боксерської слави. Займає 35-е місце в рейтингу найкращих боксерів в історії незалежно від вагової категорії за версією BoxRec</p><h2>Сьогодні в завтрашній день не всі можуть дивитися</h2></div>
    <div class="b2 flex_right"><p>Купив мужик шляпу, а вона йому як раз Купив мужик шляпу, а вона йому як раз Купив мужик шляпу, а вона йому як раз Купив мужик шляпу, а вона йому як раз </p></div>
    <div class="b3 flex_right"><ul>
        <a href="index.html"><li>index page</li></a>
        <a href="second.jsp"><li>second page</li></a>
        <a href="#"><li>third page</li></a>
        <a href="#"><li>fourth page</li></a>
        <a href="#"><li>fifth page</li></a>
    </ul></div>
    <div class="b4 flex_right">
<%--        <jsp:include page="collisionElements.html" flush="true" />--%>
<%--        <%@include file="collisionElements.html"%>--%>
<%--    include doesn't word idk y --%>
        <%
            String s = "no value";
            BufferedReader br = new BufferedReader(new FileReader("/home/roman/IdeaProjects/backFrontOrganization/src/main/webapp/collisionElements.html"));
            while (br.ready()) s = br.readLine();
        %>
        <%=s%>
    </div>
    <div class="b5 flex_right"><p>Там, де для когось Тільки лютий за вікном - На моїй вулиці давно уже весна. І дух захоплює немов від висоти, Бо так живу, немов літаю я, Так немов літаю я Кожну мить, коли зі мною ти!.. Приспів: І я на небі! Мила моя, на небі! Зоре моя, на небі, Відколи тебе знайшов! І я на небі, Мов на земному небі, Мила, коли з тобою - Літаю і знов, і знов!</p></div>
    <div class="b6 flex_left"><p>Чікібамбоні Чікібамбоні Чікібамбоні Чікібамбоні Чікібамбоні Чікібамбоні Чікібамбоні Чікібамбоні Чікібамбоні Чікібамбоні Чікібамбоні Чікібамбоні Чікібамбоні Чікібамбоні Чікібамбоні Чікібамбоні Чікібамбоні </p></div>
    <div class="b7 flex_right"><h2>Точніше дивитися можуть не всі, мало хто може це робити</h2><p>Сиджу в кафе, за столиком навпроти сидять 2 дівчини, і думаю "ось ви-то і станете моїми жертвами". Написав на серветці "Давай повечеряємо. Так - посміхнися. Ні - зроби сальто". Передав серветку через офіціанта. Дівчина прочитала, подивилася на мене, встала і зробила сальто</p></div>
</div>

<script src="onload.js"></script>

</body>
</html>
