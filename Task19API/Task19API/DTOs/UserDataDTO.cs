namespace Task19API.DTOs
{
    public class UserDataDTO
    {
        public int UserId = 101391104;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string MiddleName { get; set; } = string.Empty;
        public DateOnly BirthDate { get; set; }
        
    }
}
