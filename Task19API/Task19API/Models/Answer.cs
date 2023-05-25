using System;
using System.Collections.Generic;

namespace Task19API.Models;

public partial class Answer
{
    public int Id { get; set; }

    public int? QuestionId { get; set; }

    public int? CategoryId { get; set; }

    public int? LevelId { get; set; }

    public int? GroupId { get; set; }

    public string? Answer1 { get; set; }

    public Question Question { get; set; } = null!;
}
