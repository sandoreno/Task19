using Task19API.Models;

namespace Task19API.DTOs
{
    public class ScrobbleDTO
    {
        public int? UserId { get; set; }
        public int? GroupId { get; set; }
        public int? Scrobbles { get; set; }
        public GroupModel? Group { get; set; }
        public UserDTO? User { get; set; }
    }
}
