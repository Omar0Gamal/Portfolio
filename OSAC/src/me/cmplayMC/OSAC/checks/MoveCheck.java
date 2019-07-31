package me.cmplayMC.OSAC.checks;

import me.cmplayMC.OSAC.util.Distance;
import me.cmplayMC.OSAC.util.User;

public abstract class MoveCheck extends Check {

	public MoveCheck(CheckType type) {
		super(type);
	}
	
	public abstract CheckResult runCheck(User user, Distance distance);
	
	
}
