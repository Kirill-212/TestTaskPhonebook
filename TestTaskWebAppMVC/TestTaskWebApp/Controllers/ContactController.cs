using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using TestTaskWebApp.Models;
using TestTaskWebApp.Services;

namespace TestTaskWebApp.Controllers
{
    public class ContactController : Controller
    {
        private readonly IAsyncServiceContact<Contact> asyncServiceContact;

        public ContactController(IAsyncServiceContact<Contact> asyncServiceContact)
        {
            this.asyncServiceContact = asyncServiceContact;
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return View("Index", await asyncServiceContact.GetAll());
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] Contact contact)
        {
            try
            {
                await asyncServiceContact.Add(contact);

                return RedirectToAction("GetAll");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Put([FromForm] Contact contact)
        {
            try
            {
                await asyncServiceContact.Update(contact);

                return RedirectToAction("GetAll");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> Delete([FromQuery] string mobilePhone)
        {
            try
            {
                await asyncServiceContact.Remove(mobilePhone);

                return RedirectToAction("GetAll");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
