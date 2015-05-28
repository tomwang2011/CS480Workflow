//------------------------------------------------------------------------------
// Project Name: Pomona Transit System - Databases
// Class: CS435 - Databases - Professor Salloum
// Written by: Javier Sanchez, Richard Cousart, Elliot Rica
// Last Modified: March 5th, 2015
//------------------------------------------------------------------------------

package database;
import java.util.*;

public class driver {
	public static void main(String [] args){
		
		//Initialize Database object
		Database pomona = new Database();
		System.out.println("Welcome to the Pomona Transit System.");
		boolean switchLoop = true;
		
		while(switchLoop){
			//Print Bus Menu Loop
			System.out.println("1. Add a Bus");
			System.out.println("2. Delete a Bus");
			System.out.println("3. Update Bus");
			System.out.println("4. Add Trip Offering(s)");
			System.out.println("5. Delete Trip Offering");
			System.out.println("6. Update Driver of Trip Offering");
			System.out.println("7. Add a Driver");
			System.out.println("8. Display All Stops of Trip");
			System.out.println("9. Display Driver's Schedule");
			System.out.println("10. Display All Trips of Location");
			System.out.println("Enter X to exit program.");
			System.out.println("Please choose from the following: (Select 1-10 or X to exit) ");
			
			//Set user input key
			Scanner kb = new Scanner(System.in);
			String selection = kb.nextLine();
			
			//Run menu options
			switch(selection){
			case "1": //Add Bus
				System.out.println("Adding Bus...");
				System.out.println("Enter Bus ID: (1-25)");
				String busID = kb.nextLine();
				System.out.println("Enter Model of Bus: ");
				String model = kb.nextLine();
				System.out.println("Enter Year of Bus: (Please Enter Valid Year)");
				String year = kb.nextLine();
				pomona.addBus(busID, model, year);
				break;
			case "2": //Delete Bus
				System.out.println("Deleting Bus...");
				System.out.println("Enter Bus ID: (1-25)");
				String delID = kb.nextLine();
				pomona.deleteBus(delID);
				break;
			case "3": //Update Bus
				System.out.println("Updating Bus for Trip Offering...");
				System.out.println("Enter Trip Number: ");
				String trip = kb.nextLine();
				System.out.println("Enter Date: (i.e. Feb24)");
				String date = kb.nextLine();
				System.out.println("Enter Scheduled Start Time (i.e. 4PM, 430PM, etc.)");
				String startTime = kb.nextLine();
				System.out.println("Enter Bus ID: ");
				String newBus = kb.nextLine();
				pomona.updateBus(trip, date, startTime, newBus);
				break;
			case "4": //Add Trips
				System.out.println("Adding Trip Offering(s)....");
				System.out.println("How many offerings would you like to add?");
				int addOffers = kb.nextInt();
				
				for(int i = 1; i <= addOffers; i++){
					System.out.println("Adding Trip Offering #" + i + ".");
					System.out.println("Enter Trip Number: ");
					trip = kb.nextLine();
					kb.next();
					System.out.println("Enter Date: (i.e. Feb24)");
					date = kb.nextLine();
					kb.next();
					System.out.println("Enter Scheduled Start Time (i.e. 4PM, 430PM, etc.)");
					startTime = kb.nextLine();
					kb.next();
					System.out.println("Enter Arrival Time: ");
					String arrivalTime = kb.nextLine();
					kb.next();
					System.out.println("Enter Driver Name: ");
					String driver = kb.nextLine();
					kb.next();
					System.out.println("Enter Bus ID: ");
					busID = kb.nextLine();
					kb.next();
					pomona.addTripOffering(trip, date, startTime, arrivalTime, driver, busID);
				}
				break;
			case "5": //Delete Trip
				System.out.println("Deleting Trip Offering...");
				System.out.println("Enter Trip Number: ");
				trip = kb.nextLine();
				System.out.println("Enter Date: (i.e. Feb24)");
				date = kb.nextLine();
				System.out.println("Enter Scheduled Start Time (i.e. 4PM, 430PM, etc.)");
				startTime = kb.nextLine();
				pomona.deleteTripOffering(trip, date, startTime);
				break;
			case "6": //Update Driver
				System.out.println("Updating Driver of Trip Offering...");
				System.out.println("Enter Trip Number: ");
				trip = kb.nextLine();
				System.out.println("Enter Date: (i.e. Feb24)");
				date = kb.nextLine();
				System.out.println("Enter Scheduled Start Time (i.e. 4PM, 430PM, etc.)");
				startTime = kb.nextLine();
				System.out.println("Enter New Driver: ");
				String newDriver = kb.nextLine();
				pomona.updateDriver(trip, date, startTime, newDriver);
				break;
			case "7": //Add Driver
				System.out.println("Adding New Driver...");
				System.out.println("Enter New Driver: ");
				newDriver = kb.nextLine();
				System.out.println("Enter Driver's Phone #: (i.e. 555-555-5555)");
				String driverPhone = kb.nextLine();
				pomona.addDriver(newDriver, driverPhone);
				break;
			case "8": //Display All Stops for given Trip
				System.out.println("Displaying All Stops for Trip...");
				System.out.println("Enter Trip Number: ");
				trip = kb.nextLine();
				pomona.displayStopInfo(trip);
				break;
			case "9": //Display Driver Sched
				System.out.println("Displaying Driver's Schedule...");
				System.out.println("Enter Driver's Name: ");
				String driver = kb.nextLine();
				pomona.displayDriverSchedule(driver);
				break;
			case "10": //Displaying All Trips for given Stop
				System.out.println("Displaying All Trips for Stop...");
				System.out.println("Enter Scheduled Start Time (i.e. 4PM, 430PM, etc.)");
				String startLocation = kb.nextLine();
				System.out.println("Enter Arrival Time: ");
				String destination = kb.nextLine();
				System.out.println("Enter Date: (i.e. Feb24)");
				date = kb.nextLine();
				pomona.displayTripOffering(startLocation, destination, date);
				break;
			case "X": //Exit Program
				System.out.println("Exiting program...");
				switchLoop = false;
				break;
			default: //Incorrect input
				System.out.println("Incorrect input. Running Program again?");
				break;
			}
		}
		
		/*pomona.addBus("4", "Honda", "1987");
		pomona.deleteBus("4");
		pomona.addActualData("66","mar2", "7PM", "1", "7PM", "715PM", "710PM", "20", "10");
		pomona.displayTripOffering("Cypress", "Anaheim", "Mar1");
		pomona.addTripOffering("4", "Mar2", "2PM","3PM","Javier","3");
		pomona.deleteTripOffering("4", "Mar2", "2PM");
		pomona.updateDriver("1", "Mar1", "10AM", "Chris Jackson");
		pomona.updateBus("1", "Mar1", "10AM", "3");
		pomona.updateDriver("1", "Mar1", "10AM", "Tom Bob");
		pomona.updateBus("1", "Mar1", "10AM", "1");
		pomona.displayStopInfo("3");
		pomona.displayDriverSchedule("Tom Bob");*/
	}
}
