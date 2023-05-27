using Task19API.Interface;

namespace Task19API.Service.ConnectionService
{
    public static class ConnectionService
    {
        /// <summary>
        /// прописывается создание сервисов
        /// </summary>
        /// <param name="builder"></param>
        public static void ConnectService(WebApplicationBuilder builder)
        {
            builder.Services.AddTransient<IUser, UserIdentifyService>();
            builder.Services.AddTransient<IUserGroups, UserGroupsService>();
            builder.Services.AddTransient<IGroupDescription, DescService>();
            builder.Services.AddTransient<IScrobbleRec, ScrobbleRecService>();
            builder.Services.AddTransient<IGroupResponse, GroupResponseService>();
            builder.Services.AddTransient<ITest, TestService>();
            builder.Services.AddTransient<IVector, VectorService>();
            builder.Services.AddTransient<INormalize, Normalize>();
        }
    }
}
