FROM openjdk:8u151-jre-slim

COPY artifact/safira_api.jar /safira_api.jar

WORKDIR /

ENTRYPOINT java -Djava.security.egd=file:/dev/./urandom -jar safira_api.jar

EXPOSE 8080