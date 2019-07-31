package me.cmplayMC.StaffAutoPromote;

import java.util.ArrayList;
import java.util.HashMap;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.plugin.PluginManager;
import org.bukkit.plugin.java.JavaPlugin;

import me.cmplayMC.StaffAutoPromote.commands.Sap;
import me.cmplayMC.StaffAutoPromote.commands.Support;
import me.cmplayMC.StaffAutoPromote.datebase.Database;
import me.cmplayMC.StaffAutoPromote.datebase.SQLite;
import me.cmplayMC.StaffAutoPromote.events.JoinEvent;
import me.cmplayMC.StaffAutoPromote.events.PlayerChatEvent;

public class Main extends JavaPlugin {

	public static String Prefix = ChatColor.AQUA + "OmniSky" + ChatColor.GRAY + ">> ";
	
	public static HashMap<Player, String[]> Resons = new HashMap<Player,String[]>();
	public static ArrayList<String> Players = new ArrayList<String>();
	public static ArrayList<String> Staffs = new ArrayList<String>();
    public static ArrayList<String> inWork = new ArrayList<String>();
	
	private Database db;
	   
	
	@Override
	public void onEnable() {
		PluginManager pm = Bukkit.getPluginManager();
		loadconfig();
		
		this.db = new SQLite(this);
        this.db.load();
        
		this.getCommand("Support").setExecutor(new Support());
		this.getCommand("sap").setExecutor(new Sap());
		
		pm.registerEvents(new JoinEvent(), this);
		pm.registerEvents(new PlayerChatEvent(), this);
	}
	
	@Override
	public void onDisable() {
		
	}
	private void loadconfig() {
		getConfig().options().copyDefaults(true);
		saveDefaultConfig();
		saveConfig();
	}
	
	public Database getDatabase() {
        return this.db;
    }
}
