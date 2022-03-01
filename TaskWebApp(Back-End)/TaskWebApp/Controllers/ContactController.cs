using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaskWebApp.Models;
using TaskWebApp.Services;

namespace TaskWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IAsyncServiceContact<Contact> asyncServiceContact;

        public ContactController(IAsyncServiceContact<Contact> asyncServiceContact)
        {
            this.asyncServiceContact = asyncServiceContact;
        }

        [HttpGet]
        public async Task<IEnumerable<Contact>> GetAll()
        {
            return await asyncServiceContact.GetAll();
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Contact contact)
        {
            try
            {
                await asyncServiceContact.Add(contact);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] Contact contact)
        {
            try
            {
                await asyncServiceContact.Update(contact);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromQuery] string mobilePhone)
        {
            try
            {
                await asyncServiceContact.Remove(mobilePhone);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
