FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Task19API/Task19API.csproj", "Task19API/"]
RUN dotnet restore "Task19API/Task19API.csproj"
COPY . .
WORKDIR "/src/Task19API"
RUN dotnet build "Task19API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Task19API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Task19API.dll"]