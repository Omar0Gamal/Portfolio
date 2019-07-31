package me.cmplayMC.OSAC.checks.combat;

import org.bukkit.GameMode;
import org.bukkit.entity.Entity;

import me.cmplayMC.OSAC.checks.CheckResult;
import me.cmplayMC.OSAC.checks.CheckType;
import me.cmplayMC.OSAC.util.Distance;
import me.cmplayMC.OSAC.util.Settings;
import me.cmplayMC.OSAC.util.User;

public class Reach {

	private static final CheckResult PASS = new CheckResult(false, CheckType.REACH, "");
	
	public static CheckResult runCheck(User user, Entity entity) {
		Distance distance = new Distance(user.getPlayer().getLocation(), entity.getLocation());
		double x = distance.getXDifference();
		double z = distance.getZDifference();
		
		double max = user.getPlayer().getGameMode() == GameMode.CREATIVE ? Settings.COMBAT_MAX_REACH_CREATIVE : Settings.COMBAT_MAX_REACH_SURVIVAL;
		
		if (x > max || z > max) 
			return new CheckResult(true, CheckType.REACH, (x > z ? z > max ? "both are " : x + " is " : z + " is ") + "greather than " + max);
		
		return PASS;
	}
	
}
