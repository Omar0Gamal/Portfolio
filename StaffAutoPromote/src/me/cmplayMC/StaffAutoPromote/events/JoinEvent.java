package me.cmplayMC.StaffAutoPromote.events;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;

import me.cmplayMC.StaffAutoPromote.Main;

public class JoinEvent implements Listener {
 
	private Main main = new Main();
	
	@EventHandler
	public void onJoin(PlayerJoinEvent e) {
	    Player p = e.getPlayer();
	  
	    if(p.hasPermission("Sap.staff")) {
	    	if(main.getDatabase().getPlayer(p.getName()) != null) {
	    	   main.getDatabase().initPlayer(p, 0, 0, 0);
	    	  Main.Staffs.add(p.getName());
	    	}else {
	    		main.getDatabase().CalcScore(p);
	    	}
	    }
	}
}
