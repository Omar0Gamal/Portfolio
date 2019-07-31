package me.cmplayMC.OSAC.checks.combat;

import org.bukkit.entity.Entity;

import me.cmplayMC.OSAC.checks.CheckResult;
import me.cmplayMC.OSAC.checks.CheckType;
import me.cmplayMC.OSAC.util.Settings;
import me.cmplayMC.OSAC.util.User;

public class MultiAura {

	private static final CheckResult PASS = new CheckResult(false, CheckType.MULTIAURA, "");
	
	public static CheckResult runCheck(User user, Entity entity) {
		user.addEntity(entity.getEntityId());
		int entities = user.getEntities();
		return entities > Settings.MAX_ENTITIES ? new CheckResult(true, CheckType.MULTIAURA, "tried to hit: " + entities + " different entities max(" + Settings.MAX_ENTITIES + ")") : PASS;
	}

}
