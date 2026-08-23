using Microsoft.AspNetCore.Mvc;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();
var app = builder.Build();
app.UseCors(x=>x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.MapPost("/api/auth/login", ([FromBody] LoginRequest req) =>
{
    if(req.Username=="admin" && req.Password=="Password123")
        return Results.Ok(new { token = "demo-jwt-token", message="Login successful"});
    return Results.Unauthorized();
});
app.Run();
record LoginRequest(string Username,string Password);


#dfad
