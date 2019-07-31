package me.cmplayMC.OSAC.events;

import java.util.ArrayList;

import org.bukkit.Bukkit;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerMoveEvent;

import me.cmplayMC.OSAC.Main;
import me.cmplayMC.OSAC.checks.CheckResult;
import me.cmplayMC.OSAC.checks.MoveCheck;
import me.cmplayMC.OSAC.checks.movement.Glide;
import me.cmplayMC.OSAC.checks.movement.NormalMovements;
import me.cmplayMC.OSAC.util.Distance;
import me.cmplayMC.OSAC.util.User;


public class CheckManager implements Listener {

	private ArrayList<MoveCheck> moveChecks;

	public CheckManager() {
		moveChecks = new ArrayList<>();
		String splitter = "+==============+===============+";
		Bukkit.getLogger().info(splitter);
		Bukkit.getLogger().info("\t\tOSAC");
		Bukkit.getLogger().info(splitter);
		Bukkit.getLogger().info("\tVersion: " + Main.getPlugin(Main.class).getDescription().getVersion());
		Bukkit.getLogger().info("\tAuthor: CmplayMC");
		Bukkit.getLogger().info(splitter);
		Bukkit.getLogger().info(" ");
		Bukkit.getLogger().info(splitter);
		Bukkit.getLogger().info("\t   Check Manager");
		Bukkit.getLogger().info(splitter);
		Bukkit.getLogger().info("\tMovement Checks:");
		addCheck(new Glide());
		addCheck(new NormalMovements());
		// And all other checks
		Bukkit.getLogger().info(splitter);
	}

	private void addCheck(MoveCheck moveCheck) {
		moveChecks.add(moveCheck);
		Bukkit.getLogger().info("\t" + moveCheck.getType().getName() + " has been enabled.");
	}

	@EventHandler
	public void onMove(PlayerMoveEvent e) {
		User user = Main.getUser(e.getPlayer());
		Distance distance = new Distance(e);
		for (MoveCheck check : moveChecks)
			if (Main.shouldCheck(user, check.getType())) {
				CheckResult result = check.runCheck(user, distance);
				if (result.failed()) {
					Main.log(user, result);
					switch (check.getCancelType()) {
					case EVENT:
						e.setTo(e.getFrom());
						break;
					case PULLDOWN:

						break;
					default:
						break;
					}
				}
			}
	}

}
