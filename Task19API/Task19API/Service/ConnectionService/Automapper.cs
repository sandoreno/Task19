using AutoMapper;
using Task19API.DTOs;
using Task19API.Models;

namespace Task19API.Service.ConnectionService
{
    public class Automapper : Profile
    {
        public Automapper()
        {
            CreateMap<Groups, GroupModel>();
        }
    }
}
