package me.cmplayMC.OSAC.events;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageByEntityEvent;

import me.cmplayMC.OSAC.Main;
import me.cmplayMC.OSAC.checks.CheckResult;
import me.cmplayMC.OSAC.checks.CheckType;
import me.cmplayMC.OSAC.checks.combat.HitSpeed;
import me.cmplayMC.OSAC.checks.combat.MultiAura;
import me.cmplayMC.OSAC.checks.combat.Reach;
import me.cmplayMC.OSAC.checks.combat.WallHit;
import me.cmplayMC.OSAC.util.User;

public class CombatListener implements Listener {

	@EventHandler
	public void onDamage(EntityDamageByEntityEvent e) {
		if (e.getDamager() instanceof Player) {
			Player player = (Player) e.getDamager();
			User user = Main.getUser(player);

			if (Main.shouldCheck(user, CheckType.REACH)) {
				CheckResult reach = Reach.runCheck(user, e.getEntity());
				if (reach.failed()) {
					e.setCancelled(true); // Remove this line for silent checks
					Main.log(user, reach);
					return;
				}
			}

			if (Main.shouldCheck(user, CheckType.WALLHIT)) {
				CheckResult wallHit = WallHit.runCheck(user, e.getEntity());
				if (wallHit.failed()) {
					e.setCancelled(true); // Remove this line for silent checks
					Main.log(user, wallHit);
					return;
				}

			}
			if (Main.shouldCheck(user, CheckType.HITSPEED)) {
				CheckResult hitSpeed = HitSpeed.runCheck(user, e.getEntity());
				if (hitSpeed.failed()) {
					e.setCancelled(true); // Remove this line for silent checks
					Main.log(user, hitSpeed);
					return;
				}
			}

			if (Main.shouldCheck(user, CheckType.MULTIAURA)) {
				CheckResult multiAura = MultiAura.runCheck(user, e.getEntity());
				if (multiAura.failed()) {
					e.setCancelled(true); // Remove this line for silent checks
					Main.log(user, multiAura);
					return;
				}
			}
		}
	}

}
