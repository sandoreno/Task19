using System;
using System.Collections.Generic;

namespace Task19API.Models;

public class Scrobble
{
    public int? UserId { get; set; }
    public int? GroupId { get; set; }
    public int? Scrobbles { get; set; }
    public Groups? Group { get; set; }
    public User? User { get; set; }
}
