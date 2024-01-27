
using System.Net;

namespace timeboxing_back
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);


            builder.Services.AddCors();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services
                .AddMvc()
                .AddControllersAsServices();

            builder.WebHost.ConfigureKestrel(opt =>
            {
                opt.Listen(IPAddress.Loopback, 8080);
            });

            var app = builder.Build();

            
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors(opt =>
            {
                opt
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowAnyOrigin();
            });
            app.UseRouting();


            app.MapControllers();
            app.Run();
        }
    }
}