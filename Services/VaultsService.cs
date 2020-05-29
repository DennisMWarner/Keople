using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultsService
  {
    private readonly VaultsRepository _repo;
    public VaultsService(VaultsRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<Vault> Get(string id)
    {
      return _repo.Get(id);
    }

    public Vault Create(Vault newVault)
    {
      return _repo.Create(newVault);
    }

    internal string Delete(int id)
    {
      if (_repo.Delete(id))
      {
        return "Vault successfully removed.";
      }
      throw new Exception("Could not delete vault");
    }
  }
}