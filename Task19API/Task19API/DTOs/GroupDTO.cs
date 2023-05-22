namespace Task19API.DTOs
{
    public class GroupDTO
    {
        public int UniqueNumber { get; set; }
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
