package me.cmplayMC.OSAC.checks.combat;

import org.bukkit.entity.Entity;

import me.cmplayMC.OSAC.checks.CheckResult;
import me.cmplayMC.OSAC.checks.CheckType;
import me.cmplayMC.OSAC.util.Settings;
import me.cmplayMC.OSAC.util.User;

public class HitSpeed {

	private static final CheckResult PASS = new CheckResult(false, CheckType.HITSPEED, "");
	
	public static CheckResult runCheck(User user, Entity entity) {
		user.addHit();
		int hits = user.getHits() * 2;
		// Will fix this later 
		
		user.getPlayer().sendMessage("Hits: " + hits);
		
		if (hits > Settings.COMBAT_MAX_CPS)
			return new CheckResult(true, CheckType.HITSPEED, "tried to hit " + user.getHits() + " times per second!");
		return PASS;
	}

}
