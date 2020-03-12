using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmpManagement.Model
{
    public class EmployeeDetailsContext:DbContext
    {
        public EmployeeDetailsContext(DbContextOptions<EmployeeDetailsContext> options):base(options)
        {
            
        }

        public DbSet<EmployeeDetails> EmployeeDetails{ get; set; }
    }
}

