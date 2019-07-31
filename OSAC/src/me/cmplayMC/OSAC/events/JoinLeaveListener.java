package me.cmplayMC.OSAC.events;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;
import org.bukkit.event.player.PlayerQuitEvent;

import me.cmplayMC.OSAC.Main;
import me.cmplayMC.OSAC.util.User;

public class JoinLeaveListener implements Listener {

	@EventHandler
	public void onJoin(PlayerJoinEvent e) {
		Main.USERS.put(e.getPlayer().getUniqueId(), new User(e.getPlayer()));
	}
	
	@EventHandler
	public void onLeave(PlayerQuitEvent e) {
		Main.USERS.remove(e.getPlayer().getUniqueId());
	}
	
	
}
