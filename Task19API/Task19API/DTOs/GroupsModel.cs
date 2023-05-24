using System.Text.RegularExpressions;
using Task19API.Models;

namespace Task19API.DTOs
{
    public class GroupModel
    {
        public GroupModel(Groups group)
        {
            DirectionOne = group.DirectionOne;
            DirectionTwo = group.DirectionTwo;
            DirectionThree = group.DirectionThree;
            SiteAddress = group.SiteAddress;
            SiteDistrict = group.SiteDistrict;
            SiteArea = group.SiteArea;
            ActivePeriod = group.ActivePeriod;
            ClosePeriod = group.ClosePeriod;
            PlanPeriod = group.PlanPeriod;
        }
        public string? DirectionOne { get; set; }
        public string? DirectionTwo { get; set; }
        public string? DirectionThree { get; set; }
        public string? SiteAddress { get; set; }
        public string? SiteDistrict { get; set; }
        public string? SiteArea { get; set; }
        public string? ActivePeriod { get; set; }
        public string? ClosePeriod { get; set; }
        public string? PlanPeriod { get; set; }
        
    }
}
