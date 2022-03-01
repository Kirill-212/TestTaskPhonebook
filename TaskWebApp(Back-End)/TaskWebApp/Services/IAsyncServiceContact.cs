using System.Collections.Generic;
using System.Threading.Tasks;

namespace TaskWebApp.Services
{
    public interface IAsyncServiceContact<T>
    {
        Task Add(T item);

        Task Remove(string mobilePhone);

        Task Update(T item);

        Task<IEnumerable<T>> GetAll();
    }
}
