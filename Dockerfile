
FROM mcr.microsoft.com/dotnet/aspnet:8.0


WORKDIR /app


COPY . .


EXPOSE 5051


ENTRYPOINT ["dotnet", "IAMMETER.Central.Web.dll", "--urls", "http://*:5051"]