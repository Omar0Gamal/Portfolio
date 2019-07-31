package me.cmplayMC.StaffAutoPromote.events;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.AsyncPlayerChatEvent;

import me.cmplayMC.StaffAutoPromote.Main;
import me.cmplayMC.StaffAutoPromote.commands.Sap;

public class PlayerChatEvent implements Listener {
	
	private Main main = new Main();
	 
	@EventHandler
	public void onSpeak(AsyncPlayerChatEvent event) {
	    if(event.getMessage().toLowerCase().contains("yes")) {
	        Player p = event.getPlayer();
	        if(Sap.Target.equals(p.getName())) {
	        	Sap.Target = null;
	        	Player staff = Bukkit.getPlayerExact(Sap.Staff);
	        	staff.sendMessage(Main.Prefix + "You got a point " + ChatColor.GOLD + "+1 " + ChatColor.GRAY + "!");
	        	main.getDatabase().AddYes(staff, 1);
	        	event.setCancelled(true);
	        	p.sendMessage(Main.Prefix + "You said Yes");
	        	p.sendMessage(Main.Prefix + "Thanks for your answer.");
	        	Sap.Staff = null;
	        	main.getDatabase().CalcScore(staff);
	        }
	    }else if(event.getMessage().toLowerCase().contains("no")) {
	    	Player p = event.getPlayer();
	        if(Sap.Target.equals(p.getName())) {
	        	Sap.Target = null;
	        	Player staff = Bukkit.getPlayerExact(Sap.Staff);
	        	staff.sendMessage(Main.Prefix + "You got a negative point " + ChatColor.RED + "-1 " + ChatColor.GRAY + "!");
	        	main.getDatabase().AddNo(staff, 1);
	        	event.setCancelled(true);
	        	p.sendMessage(Main.Prefix + "You said No");
	        	p.sendMessage(Main.Prefix + "Thanks for your answer.");
	        	Sap.Staff = null;
	        	main.getDatabase().CalcScore(staff);
	        }
	    }
	}
}
