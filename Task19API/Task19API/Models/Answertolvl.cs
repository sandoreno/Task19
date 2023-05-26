using System;
using System.Collections.Generic;
using Task19API.Models;

namespace Task19API;

public class Answertolvl
{
    public int Id { get; set; }
    public int? AnswerId { get; set; }
    public int? GroupId { get; set; }
    public Answer? Answer { get; set; }
}
