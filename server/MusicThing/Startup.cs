using BCryptNet = BCrypt.Net.BCrypt;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using MusicThing.Authorization;
using MusicThing.Helpers;
using MusicThing.Services;
using MusicThing.Entities;

namespace MusicThing
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DataContext>();
            services.AddCors();
            services.AddControllers().AddJsonOptions(x => x.JsonSerializerOptions.IgnoreNullValues = true);

            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));

            services.AddScoped<IJwtUtils, JwtUtils>();
            services.AddScoped<IUserService, UserService>();

            // services.AddSwaggerGen(c =>
            // {
            //     c.SwaggerDoc("v1", new OpenApiInfo { Title = "MusicThing", Version = "v1" });
            // });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, DataContext context)
        {
            createTestUser(context);

            app.UseRouting();

            app.UseCors(x => x
                .SetIsOriginAllowed(origin => true)
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());

            app.UseMiddleware<ErrorHandlerMiddleware>();
            app.UseMiddleware<JwtMiddleware>();

            app.UseEndpoints(x => x.MapControllers());

            // if (env.IsDevelopment())
            // {
            //     app.UseDeveloperExceptionPage();
            //     app.UseSwagger();
            //     app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "MusicThing v1"));
            // }

            // app.UseHttpsRedirection();

            // app.UseRouting();

            // app.UseAuthorization();

            // app.UseEndpoints(endpoints =>
            // {
            //     endpoints.MapControllers();
            // });
        }

        private void createTestUser(DataContext context)
        {
            var testUser = new User
            {
                Username = "neil",
                PasswordHash = BCryptNet.HashPassword("test")
            };

            context.Users.Add(testUser);
            context.SaveChanges();
        }
    }
}
