//------------------------------------------------------------------------------
// Project Name: Pomona Transit System - Databases
// Class: CS435 - Databases - Professor Salloum
// Written by: Javier Sanchez, Richard Cousart, Elliot Rica
// Last Modified: March 5th, 2015
//------------------------------------------------------------------------------
package database;
import java.sql.*;

public class Database {
	private Connection c = null;
	
	public Database(){
		try {
		      Class.forName("org.sqlite.JDBC");
		      c = DriverManager.getConnection("jdbc:sqlite:BusER.db");
		      c.setAutoCommit(false);
		    } catch ( Exception e ) {
		      System.err.println( e.getClass().getName() + ": " + e.getMessage() );
		      System.exit(0);
		    }
	      System.out.println("Opened database successfully");
	}
	
	/**
	 * Deletes a bus based on bus ID
	 * @param busID
	 */
	public void deleteBus(String busID){
		Statement stmt = null;
		try { 
		    stmt = c.createStatement();
			String sql = "DELETE from BUS where BusID = " + busID;
	    	stmt.executeUpdate(sql);
	    	System.out.println("Successfully Deleted Bus ID " + busID);
			stmt.close();
			c.commit();
		} catch (SQLException e){
			System.out.println("Error: Something went wrong, please see below: ");
			e.printStackTrace();
		}
	}
	
	/**
	 * Adds a Bus to the BUS table, with the given parameters.
	 * 
	 * @param busID
	 * @param model
	 * @param year
	 */
	public void addBus(String busID, String model, String year){
		Statement stmt = null;
		try { 
		    stmt = c.createStatement();
			String sql = "INSERT INTO BUS (BusID,Model,Year) " +
	                     "VALUES ('" + busID + "','" + model + "','" + year + "');";
	    	stmt.executeUpdate(sql);
	    	System.out.println("Successfully Added Bus ID " + busID);
			stmt.close();
			c.commit();
		} catch (SQLException e){
			System.out.println("Error: Something went wrong, please see below: ");
			e.printStackTrace();
		}
	}
	
	/**
	 * Adds a driver to the Driver table with the given parameters.
	 * An Exception is raised if the entry is not unique.
	 * 
	 * @param driverName
	 * @param driverPhone
	 */
	public void addDriver(String driverName, String driverPhone){
		Statement stmt = null;
		try { 
		    stmt = c.createStatement();
			String sql = "INSERT INTO DRIVER (DriverName,DriverTelephoneNumber) " +
	                     "VALUES ('" + driverName + "','" + driverPhone + "');";
	    	stmt.executeUpdate(sql);
	    	System.out.println("Successfully Added the driver " + driverName);
			stmt.close();
			c.commit();
		} catch (SQLException e){
			System.out.println("Error: Something went wrong, please see below: ");
			e.printStackTrace();
		}
	}
	
	/**
	 * Adds actual Trip information about Stops, Times, and Passengers for a given Trip
	 * 
	 * @param TripNumber
	 * @param Date
	 * @param ScheduledStartTime
	 * @param StopNumber
	 * @param ScheduledArrivalTime
	 * @param ActualStartTime
	 * @param ActualArrivalTime
	 * @param NumberOfPassengerIn
	 * @param NumberOfPassengerOut
	 */
	public void addActualData(String TripNumber, String Date, String ScheduledStartTime, 
			String StopNumber, String ScheduledArrivalTime, 
			String ActualStartTime,String ActualArrivalTime,String NumberOfPassengerIn, 
			String NumberOfPassengerOut)
	{
		Statement stmt = null;
		try { 
		    stmt = c.createStatement();
			String sql = "INSERT INTO ACTUALTRIPSTOPINFO (TripNumber, Date, "
					+ "ScheduledStartTime, StopNumber, ScheduledArrivalTime, ActualStartTime, "
					+ "ActualArrivalTime, NumberOfPassengerIn,NumberOfPassengerOut) " +
	                     "VALUES ('" + TripNumber + "','" + Date + "','" + ScheduledStartTime 
	                     + "','" + StopNumber + "','" + ScheduledArrivalTime + "','" +
	                     ActualStartTime + "','" + ActualArrivalTime + "','" + NumberOfPassengerIn
	                     + "','" + NumberOfPassengerOut + "');";
	    	stmt.executeUpdate(sql);
	    	System.out.println("Successfully Added Trip Stop info " + TripNumber);
			stmt.close();
			c.commit();
		} catch (SQLException e){
			System.out.println("Error: Something went wrong, please see below: ");
			e.printStackTrace();
		}
	}
	
	/**
	 * Displays a Trip Offering for a Specified Start Location and Destination for a given Date.
	 * @param startLocation
	 * @param destination
	 * @param date
	 */
	public void displayTripOffering(String startLocation, String destination, String date){
		
		ResultSet rs;
		try{
			Statement stmt = null;
			stmt = c.createStatement();
			String query = "SELECT * " +
			"FROM Trip AS T, TripOffering AS T2 " +
			"WHERE T.TripNumber = T2.TripNumber AND " +
			"T2.Date LIKE '" + date + "' AND " +
			"T.StartLocation LIKE '"+ startLocation + "' AND " +
			"T.DestinationName LIKE '"+ destination + "';";
			
			rs = stmt.executeQuery(query);

			System.out.println();

			System.out.println("Displaying trips from " + startLocation + " to " + destination
					+ " for " + date + ":");
			
			while(rs.next()){
				int TripNumber = rs.getInt(1); 
				String StartLocation = rs.getString(2);
				String DestinationName = rs.getString(3);
				String Date = rs.getString(5);
				String ScheduledStartTime = rs.getString(6);
				String ScheduledArrivalTime = rs.getString(7);
				String DriverName = rs.getString(8);
				int BusID = rs.getInt(9);
				
				System.out.println();
				
				System.out.println("Trip Number: " + TripNumber + "\nStartLocation: " + StartLocation
						+ "\nDestination Name: " + DestinationName + "\nDate: " + Date
						+ "\nScheduled Start Time: " + ScheduledStartTime 
						+ "\nScheduled Arrival Time: " + ScheduledArrivalTime 
						+ "\nDriver Name: " + DriverName
						+ "\nBus ID: " + BusID);
				
			}
			
			rs.close();
		
		} catch (SQLException e){
			e.printStackTrace();
		}
		
	}
	
	/**
	 * Deletes a Trip Offering provided by the given parameters
	 * @param tripNumber
	 * @param Date
	 * @param scheduledStartTime
	 */
	public void deleteTripOffering(String tripNumber, String Date, String scheduledStartTime){
		Statement stmt = null;
		try { 
		    stmt = c.createStatement();
			String sql = "DELETE FROM TripOffering WHERE TripNumber = " + tripNumber +
					" AND Date LIKE '" + Date + "' AND ScheduledStartTime LIKE '"
					+ scheduledStartTime + "';";
	    	stmt.executeUpdate(sql);
	    	System.out.println("Successfully Deleted Trip " + tripNumber + " on " +
	    	Date + " at " + scheduledStartTime);
			stmt.close();
			c.commit();
		} catch (SQLException e){
			System.out.println("Error: Something went wrong, please see below: ");
			e.printStackTrace();
		}
		
		
		
	}
	
	/**
	 * Adds a Trip Offering to the Database
	 * @param TripNumber
	 * @param Date
	 * @param ScheduledStartTime
	 * @param ScheduledArrivalTime
	 * @param DriverName
	 * @param BusID
	 */
	public void addTripOffering(String TripNumber, String Date, String ScheduledStartTime,
			String ScheduledArrivalTime, String DriverName, String BusID){
		Statement stmt = null;
		try { 
		    stmt = c.createStatement();
			String sql = "INSERT INTO TripOffering (TripNumber, Date, ScheduledStartTime, "
		    + "ScheduledArrivalTime, DriverName, BusID) "
	        + "VALUES ('" + TripNumber + "','" + Date + "','" + ScheduledStartTime
	        + "','" + ScheduledArrivalTime + "','" + DriverName + "','" + BusID + "');";
	    	stmt.executeUpdate(sql);
	    	System.out.println("Successfully Added Trip Offering for Trip " + TripNumber);
			stmt.close();
			c.commit();
		} catch (SQLException e){
			System.out.println("Error: Something went wrong, please see below: ");
			e.printStackTrace();
		}
	}
	
	/**
	 * Updates the driver for the specified queried row.
	 * @param tripNumber
	 * @param date
	 * @param scheduledStartTime
	 * @param newDriver
	 */
	public void updateDriver(String tripNumber, String date, String scheduledStartTime, String newDriver){
		Statement stmt = null;
		try { 
		    stmt = c.createStatement();
			String sql = "UPDATE TripOffering SET DriverName = '" + newDriver + "' WHERE "
			+ "TripNumber = '" + tripNumber + "' AND Date LIKE '" + date + "' AND " 
			+ "ScheduledStartTime LIKE '" + scheduledStartTime + "';";
	    	stmt.executeUpdate(sql);
	    	System.out.println("Successfully Updated Driver to: " + newDriver + " for Trip " + tripNumber);
			stmt.close();
			c.commit();
		} catch (SQLException e){
			System.out.println("Error: Something went wrong, please see below: ");
			e.printStackTrace();
		}
		
	}
	
	/**
	 * Updates the Bus ID for a given Trip offering
	 * @param tripNumber
	 * @param date
	 * @param scheduledStartTime
	 * @param newBus
	 */
	public void updateBus(String tripNumber, String date, String scheduledStartTime, String newBus){
		Statement stmt = null;
		try { 
		    stmt = c.createStatement();
			String sql = "UPDATE TripOffering SET BusID = '" + newBus + "' WHERE "
			+ "TripNumber = '" + tripNumber + "' AND Date LIKE '" + date + "' AND " 
			+ "ScheduledStartTime LIKE '" + scheduledStartTime + "';";
	    	stmt.executeUpdate(sql);
	    	System.out.println("Successfully Updated Bus to: " + newBus + " for Trip " + tripNumber);
			stmt.close();
			c.commit();
		} catch (SQLException e){
			System.out.println("Error: Something went wrong, please see below: ");
			e.printStackTrace();
		}
		
	}
	
	/**
	 * Displays the Stop Info and Sequence Numbers for a Given TripNumber
	 * @param tripNumber
	 */
	public void displayStopInfo(String tripNumber){
		
		ResultSet rs;
		try{
			Statement stmt = null;
			stmt = c.createStatement();
			String query = "SELECT * " +
			"FROM TripStopInfo AS T " +
			"WHERE T.TripNumber = '" + tripNumber + "';";
			
			rs = stmt.executeQuery(query);

			System.out.println();

			System.out.println("Displaying trip stops for Trip Number " + tripNumber + ":");
			
			while(rs.next()){
				int TripNumber = rs.getInt(1); 
				String StopNumber = rs.getString(2);
				String SequenceNumber = rs.getString(3);
				String DriveTime = rs.getString(4);
				
				System.out.println();
				
				System.out.println("Trip Number: " + TripNumber + "\nStop Number: " + StopNumber
						+ "\nSequence Number: " + SequenceNumber + "\nDrive Time: " + DriveTime);
				
			}
			
			rs.close();
		
		} catch (SQLException e){
			e.printStackTrace();
		}
		
	}

	/**
	 * Displays all the Driver's scheduled Trips
	 * @param driverName
	 */
	public void displayDriverSchedule(String driverName){

		ResultSet rs;
		try{
			Statement stmt = null;
			stmt = c.createStatement();
			String query = "SELECT * " +
					"FROM TripOffering AS T " +
					"WHERE T.DriverName LIKE '" + driverName + "';";

			rs = stmt.executeQuery(query);

			System.out.println();

			System.out.println("Displaying the schedule for driver " + driverName + ":");

			while(rs.next()){
				int TripNumber = rs.getInt(1); 
				String date = rs.getString(2);
				String ScheduledStartTime = rs.getString(3);
				String ScheduledArrivalTime = rs.getString(4);
				int BusID = rs.getInt(5);

				System.out.println();

				System.out.println("Trip Number: " + TripNumber + "\nDate: " + date
						+ "\nScheduled Start Time: " + ScheduledStartTime 
						+ "\nScheduled Arrival Time: " + ScheduledArrivalTime 
						+ "\nBus ID: " + BusID);

			}

			rs.close();

		} catch (SQLException e){
			e.printStackTrace();
		}

	}
	
}
