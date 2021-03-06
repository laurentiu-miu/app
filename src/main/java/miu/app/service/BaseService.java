package miu.app.service;

import miu.app.model.BaseEntity;

import java.util.Collection;

/**
 * The BaseService interface defines all public business behaviors for
 * operations on the BaseEntity entity model.
 * <p>
 * This interface should be injected into BaseService clients, not the
 * implementation bean.
 *
 * @author LaurentiuM
 * @version createdOn: 12/20/15
 */
public interface BaseService {
    /**
     * Find all BaseEntities entities.
     *
     * @param <T>   the class type of BaseEnity
     * @param clazz Of the entity that is persisted
     * @return A Collection of BaseEnity objects.
     */
    <T extends BaseEntity> Collection<T> findAll(Class<T> clazz);

    /**
     * Find a single BaseEntity entity by primary key identifier.
     *
     * @param clazz Of the entity that is persisted
     * @param id    A Long primary key identifier.
     * @param <T>   the class type of BaseEnity
     * @return A Greeting or <code>null</code> if none found.
     */
    <T extends BaseEntity> T findOne(Class<T> clazz, Long id);

    /**
     * Persists a BaseEntity entity in the data store.
     *
     * @param baseEntity A BaseEntity object to be persisted.
     * @param <T>        the class type of BaseEnity
     * @return The persisted BaseEntity entity.
     */
    <T extends BaseEntity> T create(T baseEntity);

    /**
     * Updates a previously persisted BaseEntity entity in the data store.
     *
     * @param baseEntity A BaseEntity object to be updated.
     * @param <T>        the class type of BaseEnity
     * @return The updated BaseEntity entity.
     */
    <T extends BaseEntity> T update(T baseEntity);

    /**
     * Removes a previously persisted BaseEntity entity from the data store.
     *
     * @param id    A Long primary key identifier.
     * @param <T>   the class type of BaseEnity
     * @param clazz Of the entity that is persisted
     */
    <T extends BaseEntity> void delete(Class<T> clazz, Long id);

    /**
     * Evicts all members of the "baseEntities" cache.
     */
    void evictCache();
}
