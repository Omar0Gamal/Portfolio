package me.cmplayMC.StaffAutoPromote.datebase;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;

import org.bukkit.entity.Player;

import me.cmplayMC.StaffAutoPromote.Main;




public abstract class Database {
    Main plugin;
    Connection connection;
    // The name of the table we created back in SQLite class.
    public String table = "Points";
    public int tokens = 0;
    public Database(Main instance){
        plugin = instance;
    }

    public abstract Connection getSQLConnection();

    public abstract void load();

    public void initialize(){
        connection = getSQLConnection();
        try{
            PreparedStatement ps = connection.prepareStatement("SELECT * FROM " + table + " WHERE player = ?");
            
            ps.setString(1, "test");
            ResultSet rs = ps.executeQuery();
            
            close(ps,rs);
   
        } catch (SQLException ex) {
            plugin.getLogger().log(Level.SEVERE, "Unable to retreive connection", ex);
        }
    }

    // These are the methods you can use to get things out of your database. You of course can make new ones to return different things in the database.
    // This returns the number of people the player killed.
    public String getPlayer(String string) {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            conn = getSQLConnection();
            ps = conn.prepareStatement("SELECT * FROM " + table + " WHERE player = '"+string+"';");
   
            rs = ps.executeQuery();
            while(rs.next()){
                if(rs.getString("player").equalsIgnoreCase(string.toLowerCase())){ // Tell database to search for the player you sent into the method. e.g getTokens(sam) It will look for sam.
                    return rs.getString("player"); // Return the players ammount of kills. If you wanted to get total (just a random number for an example for you guys) You would change this to total!
                }
            }
        } catch (SQLException ex) {
            plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionExecute(), ex);
        } finally {
            try {
                if (ps != null)
                    ps.close();
                if (conn != null)
                    conn.close();
            } catch (SQLException ex) {
                plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionClose(), ex);
            }
        }
        return null;
    }
    
    public Integer getYes(String string) {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            conn = getSQLConnection();
            ps = conn.prepareStatement("SELECT * FROM " + table + " WHERE player = '"+string+"';");
   
            rs = ps.executeQuery();
            while(rs.next()){
                if(rs.getString("player").equalsIgnoreCase(string.toLowerCase())){ // Tell database to search for the player you sent into the method. e.g getTokens(sam) It will look for sam.
                    return rs.getInt("yes"); // Return the players ammount of kills. If you wanted to get total (just a random number for an example for you guys) You would change this to total!
                }
            }
        } catch (SQLException ex) {
            plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionExecute(), ex);
        } finally {
            try {
                if (ps != null)
                    ps.close();
                if (conn != null)
                    conn.close();
            } catch (SQLException ex) {
                plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionClose(), ex);
            }
        }
        return 0;
    }
    
    public Integer getNo(String string) {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            conn = getSQLConnection();
            ps = conn.prepareStatement("SELECT * FROM " + table + " WHERE player = '"+string+"';");
   
            rs = ps.executeQuery();
            while(rs.next()){
                if(rs.getString("player").equalsIgnoreCase(string.toLowerCase())){ // Tell database to search for the player you sent into the method. e.g getTokens(sam) It will look for sam.
                    return rs.getInt("no"); // Return the players ammount of kills. If you wanted to get total (just a random number for an example for you guys) You would change this to total!
                }
            }
        } catch (SQLException ex) {
            plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionExecute(), ex);
        } finally {
            try {
                if (ps != null)
                    ps.close();
                if (conn != null)
                    conn.close();
            } catch (SQLException ex) {
                plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionClose(), ex);
            }
        }
        return 0;
    }
    // Exact same method here, Except as mentioned above i am looking for total!
    public Integer getScore(String string) {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            conn = getSQLConnection();
            ps = conn.prepareStatement("SELECT * FROM " + table + " WHERE player = '"+string+"';");
   
            rs = ps.executeQuery();
            while(rs.next()){
                if(rs.getString("player").equalsIgnoreCase(string.toLowerCase())){
                    return rs.getInt("score");
                }
            }
        } catch (SQLException ex) {
            plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionExecute(), ex);
        } finally {
            try {
                if (ps != null)
                    ps.close();
                if (conn != null)
                    conn.close();
            } catch (SQLException ex) {
                plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionClose(), ex);
            }
        }
        return 0;
    }

// Now we need methods to save things to the database
    public void initPlayer(Player player, Integer Yes, Integer No, Integer Score) {
        Connection conn = null;
        PreparedStatement ps = null;
        try {
            conn = getSQLConnection();
            ps = conn.prepareStatement("REPLACE INTO " + table + " (player,yes,no,score) VALUES(?,?,?,?)"); // IMPORTANT. In SQLite class, We made 3 colums. player, Kills, Total.
            ps.setString(1, player.getName().toLowerCase());                                             // YOU MUST put these into this line!! And depending on how many
                                                                                                         // colums you put (say you made 5) All 5 need to be in the brackets
                                                                                                         // Seperated with comma's (,) AND there needs to be the same amount of
                                                                                                         // question marks in the VALUES brackets. Right now i only have 3 colums
                                                                                                         // So VALUES (?,?,?) If you had 5 colums VALUES(?,?,?,?,?)
                                                                                                
            ps.setInt(2, 0); // This sets the value in the database. The colums go in order. Player is ID 1, kills is ID 2, Total would be 3 and so on. you can use
                                  // setInt, setString and so on. tokens and total are just variables sent in, You can manually send values in as well. p.setInt(2, 10) <-
                                  // This would set the players kills instantly to 10. Sorry about the variable names, It sets their kills to 10 i just have the variable called
                                  // Tokens from another plugin :/
            ps.setInt(3, 0);
            ps.setInt(4, 0);
            ps.executeUpdate();
            return;
        } catch (SQLException ex) {
            plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionExecute(), ex);
        } finally {
            try {
                if (ps != null)
                    ps.close();
                if (conn != null)
                    conn.close();
            } catch (SQLException ex) {
                plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionClose(), ex);
            }
        }
        return;       
    }
    
    
    public void AddYes(Player player, Integer add) {
        Connection conn = null;
        PreparedStatement ps = null;
        try {
            conn = getSQLConnection();
            ps = conn.prepareStatement("REPLACE INTO " + table + " (player,yes,no,score) VALUES(?,?,?,?)"); // IMPORTANT. In SQLite class, We made 3 colums. player, Kills, Total.
            ps.setString(1, player.getName().toLowerCase());                                             // YOU MUST put these into this line!! And depending on how many
                                                                                                         // colums you put (say you made 5) All 5 need to be in the brackets
                                                                                                         // Seperated with comma's (,) AND there needs to be the same amount of
                                                                                                         // question marks in the VALUES brackets. Right now i only have 3 colums
                                                                                                         // So VALUES (?,?,?) If you had 5 colums VALUES(?,?,?,?,?)
                                                                                                
            ps.setInt(2, getYes(player.getName()) + add); // This sets the value in the database. The colums go in order. Player is ID 1, kills is ID 2, Total would be 3 and so on. you can use
                                  // setInt, setString and so on. tokens and total are just variables sent in, You can manually send values in as well. p.setInt(2, 10) <-
                                  // This would set the players kills instantly to 10. Sorry about the variable names, It sets their kills to 10 i just have the variable called
                                  // Tokens from another plugin :/
            ps.executeUpdate();
            return;
        } catch (SQLException ex) {
            plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionExecute(), ex);
        } finally {
            try {
                if (ps != null)
                    ps.close();
                if (conn != null)
                    conn.close();
            } catch (SQLException ex) {
                plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionClose(), ex);
            }
        }
        return;       
    }

    public void AddNo(Player player, Integer add) {
        Connection conn = null;
        PreparedStatement ps = null;
        try {
            conn = getSQLConnection();
            ps = conn.prepareStatement("REPLACE INTO " + table + " (player,yes,no,score) VALUES(?,?,?,?)"); // IMPORTANT. In SQLite class, We made 3 colums. player, Kills, Total.
            ps.setString(1, player.getName().toLowerCase());                                             // YOU MUST put these into this line!! And depending on how many
                                                                                                         // colums you put (say you made 5) All 5 need to be in the brackets
                                                                                                         // Seperated with comma's (,) AND there needs to be the same amount of
                                                                                                         // question marks in the VALUES brackets. Right now i only have 3 colums
                                                                                                         // So VALUES (?,?,?) If you had 5 colums VALUES(?,?,?,?,?)
                                                                                                
            ps.setInt(3, getNo(player.getName()) + add); // This sets the value in the database. The colums go in order. Player is ID 1, kills is ID 2, Total would be 3 and so on. you can use
                                  // setInt, setString and so on. tokens and total are just variables sent in, You can manually send values in as well. p.setInt(2, 10) <-
                                  // This would set the players kills instantly to 10. Sorry about the variable names, It sets their kills to 10 i just have the variable called
                                  // Tokens from another plugin :/
            ps.executeUpdate();
            return;
        } catch (SQLException ex) {
            plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionExecute(), ex);
        } finally {
            try {
                if (ps != null)
                    ps.close();
                if (conn != null)
                    conn.close();
            } catch (SQLException ex) {
                plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionClose(), ex);
            }
        }
        return;       
    }
    
    public void CalcScore(Player player) {
        Connection conn = null;
        PreparedStatement ps = null;
        try {
            conn = getSQLConnection();
            ps = conn.prepareStatement("REPLACE INTO " + table + " (player,yes,no,score) VALUES(?,?,?,?)"); // IMPORTANT. In SQLite class, We made 3 colums. player, Kills, Total.
            ps.setString(1, player.getName().toLowerCase());                                             // YOU MUST put these into this line!! And depending on how many
                                                                                                         // colums you put (say you made 5) All 5 need to be in the brackets
                                                                                                         // Seperated with comma's (,) AND there needs to be the same amount of
                                                                                                         // question marks in the VALUES brackets. Right now i only have 3 colums
                                                                                                         // So VALUES (?,?,?) If you had 5 colums VALUES(?,?,?,?,?)
                                                                                                
            ps.setInt(4, getYes(player.getName()) - getNo(player.getName()) * 2); // This sets the value in the database. The colums go in order. Player is ID 1, kills is ID 2, Total would be 3 and so on. you can use
                                  // setInt, setString and so on. tokens and total are just variables sent in, You can manually send values in as well. p.setInt(2, 10) <-
                                  // This would set the players kills instantly to 10. Sorry about the variable names, It sets their kills to 10 i just have the variable called
                                  // Tokens from another plugin :/
            ps.executeUpdate();
            return;
        } catch (SQLException ex) {
            plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionExecute(), ex);
        } finally {
            try {
                if (ps != null)
                    ps.close();
                if (conn != null)
                    conn.close();
            } catch (SQLException ex) {
                plugin.getLogger().log(Level.SEVERE, Errors.sqlConnectionClose(), ex);
            }
        }
        return;       
    }
    public void close(PreparedStatement ps,ResultSet rs){
        try {
            if (ps != null)
                ps.close();
            if (rs != null)
                rs.close();
        } catch (SQLException ex) {
            Error.close(plugin, ex);
        }
    }
}
 
