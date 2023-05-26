using System;
using System.Collections.Generic;

namespace Task19API.Models;

public class Answer
{
    public int Id { get; set; }
    public int? QuestionId { get; set; }
    public int? LevelId { get; set; }
    public string? Answer1 { get; set; }
    public ICollection<Answertolvl>? Answertolvl { get; set; }
    public Question? Question { get; set; }
}
