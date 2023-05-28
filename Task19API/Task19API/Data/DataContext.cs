using Microsoft.EntityFrameworkCore;
using Task19API.Models;

namespace Task19API.Data
{
    public partial class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Answer> Answers { get; set; }
        public DbSet<Answertolvl> Answertolvls { get; set; }
        public DbSet<ItemToId> ItemToIds { get; set; }
        public DbSet<Dict> Dicts { get; set; }
        public DbSet<Groups> Groups { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Scrobble> Scrobbles { get; set; }
        public DbSet<User> Users { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ItemToId>(entity =>
            {
                entity
                    .HasNoKey()
                    .ToTable("item_to_id");

                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.UniqueNumber).HasColumnName("unique_number");
            });
            modelBuilder.Entity<Answer>(entity =>
            {
                entity.HasKey(e => e.Id).HasName("answer_pkey");

                entity.ToTable("answer");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");
                entity.Property(e => e.Answer1).HasColumnName("answer");
                entity.Property(e => e.LevelId).HasColumnName("level_id");
                entity.Property(e => e.QuestionId).HasColumnName("question_id");

                entity.HasOne(d => d.Question).WithMany(p => p.Answer)
                    .HasForeignKey(d => d.QuestionId)
                    .HasConstraintName("answer_question_id_fkey");
            });
            modelBuilder.Entity<Answertolvl>(entity =>
            {
                entity.HasKey(e => e.Id).HasName("answertolvl_pkey");

                entity.ToTable("answertolvl");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");
                entity.Property(e => e.AnswerId).HasColumnName("answer_id");
                entity.Property(e => e.GroupId).HasColumnName("group_id");

                entity.HasOne(d => d.Answer).WithMany(p => p.Answertolvl)
                    .HasForeignKey(d => d.AnswerId)
                    .HasConstraintName("answertolvl_answer_id_fkey");
            });
            modelBuilder.Entity<Question>(entity =>
            {
                entity.HasKey(e => e.Id).HasName("question_pkey");

                entity.ToTable("question");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");
                entity.Property(e => e.Question1).HasColumnName("question");
                entity.Property(e => e.QuestionLevel).HasColumnName("question_level");
            });
            modelBuilder.Entity<Groups>(entity =>
            {
                entity.HasKey(e => e.UniqueNumber).HasName("groups__pkey");

                entity.ToTable("groups_");

                entity.Property(e => e.UniqueNumber)
                    .ValueGeneratedNever()
                    .HasColumnName("unique_number");
                entity.Property(e => e.ActivePeriod).HasColumnName("active_period");
                entity.Property(e => e.ClosePeriod).HasColumnName("close_period");
                entity.Property(e => e.DirectionOne).HasColumnName("direction_one");
                entity.Property(e => e.DirectionThree).HasColumnName("direction_three");
                entity.Property(e => e.DirectionTwo).HasColumnName("direction_two");
                entity.Property(e => e.PlanPeriod).HasColumnName("plan_period");
                entity.Property(e => e.SiteAddress).HasColumnName("site_address");
                entity.Property(e => e.SiteArea).HasColumnName("site_area");
                entity.Property(e => e.SiteDistrict).HasColumnName("site_district");
            });

            modelBuilder.Entity<Dict>(entity =>
            {
                entity
                    .HasNoKey()
                    .ToTable("dict");

                entity.Property(e => e.Category).HasColumnName("category");
                entity.Property(e => e.DLevel1).HasColumnName("d_level1");
                entity.Property(e => e.DLevel2).HasColumnName("d_level2");
                entity.Property(e => e.DLevel3).HasColumnName("d_level3");
                entity.Property(e => e.IdLevel1).HasColumnName("id_level1");
                entity.Property(e => e.IdLevel2).HasColumnName("id_level2");
                entity.Property(e => e.IdLevel3).HasColumnName("id_level3");
                entity.Property(e => e.Level1).HasColumnName("level1");
                entity.Property(e => e.Level2).HasColumnName("level2");
                entity.Property(e => e.Level3).HasColumnName("level3");
            });

            modelBuilder.Entity<Scrobble>(entity =>
            {
                entity
                    .HasNoKey()
                    .ToTable("scrobbles");

                entity.Property(e => e.GroupId).HasColumnName("group_id");
                entity.Property(e => e.Scrobbles).HasColumnName("scrobbles");
                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Group).WithMany()
                    .HasForeignKey(d => d.GroupId)
                    .HasConstraintName("scrobbles_group_id_fkey");

                entity.HasOne(d => d.User).WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("scrobbles_user_id_fkey");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.UniqueNumber).HasName("users_pkey");

                entity.ToTable("users");

                entity.Property(e => e.UniqueNumber)
                    .ValueGeneratedNever()
                    .HasColumnName("unique_number");
                entity.Property(e => e.Address).HasColumnName("address");
                entity.Property(e => e.Birthdate).HasColumnName("birthdate");
                entity.Property(e => e.DateCreated).HasColumnName("date_created");
                entity.Property(e => e.Sex).HasColumnName("sex");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
