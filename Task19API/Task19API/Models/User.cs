using System;
using System.Collections.Generic;

namespace Task19API.Models;

public partial class User
{
    public int UniqueNumber { get; set; }

    public DateTime? DateCreated { get; set; }

    public string? Sex { get; set; }

    public DateOnly? Birthdate { get; set; }

    public string? Address { get; set; }
}
