package info.morgia.javadddangular;

import static org.junit.jupiter.api.Assertions.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class JavaDddAngularApplicationTests {

	@PersistenceContext
  	private EntityManager em;

	@Test
	void contextLoads() {
	}

	@Test
	@Transactional
	void test1(){
		DemoValue v=new DemoValue();
		v.setIntValue(2);
		v.setStringValue("AAA");
		em.persist(v);
		em.flush();
		
	}
}
