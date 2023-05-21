using Microsoft.EntityFrameworkCore;
using Task19API.Models;

namespace Task19API.Data
{
    public partial class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public virtual DbSet<Group> Groups { get; set; }

        public virtual DbSet<Scrobble> Scrobbles { get; set; }

        public virtual DbSet<User> Users { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Group>(entity =>
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
