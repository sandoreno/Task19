﻿using Microsoft.EntityFrameworkCore;
using System.Linq;
using Task19API.Data;
using Task19API.DTOs;
using Task19API.Interface;
using Task19API.Models;

namespace Task19API.Service
{
    public class TestService : ITest
    {
        private readonly DataContext _context;

        public TestService(DataContext context)
        {
            _context = context;
        }

        public async Task<TestModel> GetTest(TestModelResponse question)
        {

            var data = new TestModel();
            try {

                data.question = await _context.Questions
                    .Where(x => x.Id == question.QuestionId)
                    .Select(x => new QuestionModel { QuestionId = x.Id, Question = x.Question1 })
                    .FirstOrDefaultAsync();
                // тут нужно будет получить по answerToLVL значения для следующего уровня и  заново вытащить вопромы из Answer
                // для 1 уровня 
                // для 2 уровня
                // для 3 уровня
                var answerToLvl = await _context.Answertolvls.Where(x => question.AnswerId.Contains(x.Id)).ToListAsync();
                if (question.QuestionId == 1)
                {
                    // для 1 уровня 
                    data.answerModels = await _context.Answers
                        .Where(x => x.QuestionId == 1)
                        .Select(x => new AnswerModel { Id = x.Id, Answer = x.Answer1 })
                        .ToListAsync();
                }
                else {
                    // для 2 уровня
                    // для 3 уровня
                    //var ansvers = await _context.Answers.Include(x => x.Answertolvl).ToListAsync();

                    var lvl = await _context.Answertolvls
                        .Where(x => question.AnswerId
                        .Contains((int)x.AnswerId))
                        .Select(x => x.GroupId)
                        .ToListAsync();
                    // для 2 уровня
                    var dict = new List<int?>(); 
                    if (question.QuestionId == 2)
                    {
                         dict = await _context.Dicts.Where(x => lvl.Contains(x.IdLevel1)).Select(x => x.IdLevel2).ToListAsync();
                    }
                    // для 3 уровня
                    if (question.QuestionId == 3)
                    {
                         dict = await _context.Dicts.Where(x => lvl.Contains(x.IdLevel2)).Select(x => x.IdLevel3).ToListAsync();
                    }
                    data.answerModels = await _context.Answertolvls
                        .Where(x=> dict.Contains(x.GroupId))
                        .Include(x=> x.Answer)
                        .Select(x => new AnswerModel { Id = x.Answer.Id, Answer = x.Answer.Answer1 })
                        .ToListAsync();

                }
                return data;
            }
            catch (Exception ex) {
                Console.WriteLine(ex.Message);
                return data;
            }
        }

    }
}
