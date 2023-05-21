namespace Task19API.DTOs
{
    public class UserDTO
    {
        public int UniqueNumber { get; set; }
        public DateTime? DateCreated { get; set; }
        public string? Sex { get; set; }
        public DateOnly? Birthdate { get; set; }
        public string? Address { get; set; }
    }
}
