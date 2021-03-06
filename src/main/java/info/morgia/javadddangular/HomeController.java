package info.morgia.javadddangular;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api/home")
public class HomeController {
        @PersistenceContext
	protected EntityManager entityManager;
        
        @GetMapping("/getValue")
        public String getValue() {
                return "Test2";
        }

        @Transactional
        @GetMapping("writeValues")
        public String writeValues(){
                DemoValue v=new DemoValue();
                v.setIntValue(10);
                v.setStringValue("ten");
                entityManager.persist(v);
                entityManager.flush();
                entityManager.clear();
                return "OK";
        }
}