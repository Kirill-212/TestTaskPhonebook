using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskWebApp.ContextDB;
using TaskWebApp.Models;

namespace TaskWebApp.Repositories
{
    public class AsyncRepositoryContact : IAsyncRepositoryContact<Contact>
    {
        private readonly ContextDb context;

        public AsyncRepositoryContact(ContextDb context)
        {
            this.context = context;
        }

        public async Task Add(Contact item)
        {
            await context.Contacts.AddAsync(item);
            await context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Contact>> GetAll()
        {
            return await context.Contacts.ToListAsync();
        }

        public async Task<Contact> GetByMobilePhone(string mobilePhone)
        {
            return await context.Contacts.Where(i => i.MobilePhone == mobilePhone).FirstOrDefaultAsync();
        }

        public async Task Remove(Contact item)
        {
            context.Contacts.Remove(item);
            await context.SaveChangesAsync();
        }

        public async Task Update(Contact item)
        {
            context.Entry(item).State = EntityState.Modified;
            await context.SaveChangesAsync();
        }
    }
}
