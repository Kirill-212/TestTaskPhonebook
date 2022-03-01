using System.Collections.Generic;
using System.Threading.Tasks;

namespace TaskWebApp.Repositories
{
    public interface IAsyncRepositoryContact<T>
    {
        Task Add(T item);

        Task Remove(T item);

        Task Update(T item);

        Task<IEnumerable<T>> GetAll();

        Task<T> GetByMobilePhone(string mobilePhone);
    }
}
