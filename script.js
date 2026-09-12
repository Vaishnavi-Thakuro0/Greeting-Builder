function formatName(firstName, lastName)
{
  return firstName + " " + lastName;
}
function getGreeting(timeOfDay)
{
  if(timeOfDay == "morning")
    return("Good morning");
  else if(timeOfDay == "afternoon")
    return("Good afternoon");
  else
    return("Good evening");
}
function createGreeting(firstName, lastName, timeOfDay)
{
  var name = formatName(firstName, lastName);
  var greeting = getGreeting(timeOfDay);
  return name + " " + greeting;
}
