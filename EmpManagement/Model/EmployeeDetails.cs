using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmpManagement.Model
{
    public class EmployeeDetails
    {
        [Key]
        public int EmpId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string FirstName { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string LastName { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(20)")]
        public string Phone { get; set; }
        [Column(TypeName = "nvarchar(15)")]
        public string Mobile { get; set; }

        public bool IsActive { get; set; }
    }
}

