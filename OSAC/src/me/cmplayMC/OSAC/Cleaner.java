package me.cmplayMC.OSAC;

import org.bukkit.scheduler.BukkitRunnable;

import me.cmplayMC.OSAC.util.User;


public class Cleaner extends BukkitRunnable {

	@Override
	public void run() {
		for (User user : Main.USERS.values()) {
			user.getHits();
			user.getEntities();
		}
	}

}
