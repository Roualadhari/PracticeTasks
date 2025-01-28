let role = "subscriber"; 

    switch (role) {
      case "employee":
        console.log("You are an Employee and have full access to 'Dietary Services'.");
        break;

      case "enrolled member":
        console.log("You are an Enrolled Member and have access to 'Dietary Services' and one-on-one interaction with a dietician.");
        break;

      case "subscriber":
        console.log("You are a Subscriber and have partial access to 'Dietary Services'.");
        break;

      case "non-subscriber":
        console.log("You are a Non-Subscriber. Please enroll or subscribe first to avail the 'Dietary Services'.");
        break;

      default:
        console.log("Invalid role. Please provide a valid role (Employee, Enrolled Member, Subscriber, Non-Subscriber).");
    }