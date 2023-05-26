using System;
using System.Collections.Generic;

namespace Task19API.Models;

public class Question
{
    public int Id { get; set; }
    public string? Question1 { get; set; }
    public int? QuestionLevel { get; set; }
    public ICollection<Answer>? Answer { get; set; }
}
