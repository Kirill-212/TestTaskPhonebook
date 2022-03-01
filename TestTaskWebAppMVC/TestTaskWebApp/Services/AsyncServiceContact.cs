using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TestTaskWebApp.Models;
using TestTaskWebApp.Repositories;

namespace TestTaskWebApp.Services
{
    public class AsyncServiceContact : IAsyncServiceContact<Contact>
    {
        private readonly IAsyncRepositoryContact<Contact> asyncRepositoryContact;

        public AsyncServiceContact(IAsyncRepositoryContact<Contact> asyncRepositoryContact)
        {
            this.asyncRepositoryContact = asyncRepositoryContact;
        }

        public async Task Add(Contact item)
        {
            Contact contact = await asyncRepositoryContact
                .GetByMobilePhone(item.MobilePhone);
            if (contact != null)
            {
                throw new Exception("This mobile phone alredy is use");
            }
            await asyncRepositoryContact.Add(item);
        }

        public async Task<IEnumerable<Contact>> GetAll()
        {
            return await asyncRepositoryContact.GetAll();
        }

        public async Task Remove(string mobilePhone)
        {
            Contact contact = await asyncRepositoryContact.GetByMobilePhone(mobilePhone);
            if (contact == null)
            {
                throw new Exception("This mobile phone is not faund.");
            }
            await asyncRepositoryContact.Remove(contact);
        }

        public async Task Update(Contact item)
        {
            await asyncRepositoryContact.Update(item);
        }
    }
}
