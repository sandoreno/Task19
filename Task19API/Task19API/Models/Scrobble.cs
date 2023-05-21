using System;
using System.Collections.Generic;

namespace Task19API.Models;

public partial class Scrobble
{
    public int? UserId { get; set; }

    public int? GroupId { get; set; }

    public int? Scrobbles { get; set; }

    public virtual Group? Group { get; set; }

    public virtual User? User { get; set; }
}
