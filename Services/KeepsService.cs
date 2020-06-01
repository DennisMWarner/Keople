using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class KeepsService
  {
    private readonly KeepsRepository _repo;
    public KeepsService(KeepsRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<Keep> Get()
    {
      return _repo.Get();
    }

    public Keep Create(Keep newKeep)
    {
      return _repo.Create(newKeep);
    }

    internal Keep GetKeepById(int id)
    {
      Keep foundKeep = _repo.GetKeepById(id);
      if (foundKeep == null)
      {
        throw new Exception("Invalid Keep Id");
      }
      return foundKeep;
    }

    internal IEnumerable<VaultKeepViewModel> GetKeepsByVaultId(int vaultId, string userId)
    {
      return _repo.GetKeepsByVaultId(vaultId, userId);
    }

    internal Keep EditKeep(Keep keepToUpdate)
    {
      Keep updatedKeep = _repo.EditKeep(keepToUpdate);
      if (updatedKeep == null)
      {
        throw new Exception("Keep Not Found");
      }
      return updatedKeep;
    }

    internal IEnumerable<Keep> GetUserKeeps(string userId)
    {
      return _repo.GetUserKeeps(userId);
    }

    internal string Delete(int id, string userId)
    {
      if (_repo.Delete(id, userId))
      {
        return "Keep successfully removed.";
      }
      throw new Exception("Could not delete keep");
    }

  }
}